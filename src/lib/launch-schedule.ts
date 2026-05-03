/**
 * Launch Schedule — SpaceX/NASA Cape Canaveral launch alerts
 * Uses the Launch Library 2 API (free tier) to surface upcoming launches
 * that could close Playalinda Beach / Canaveral National Seashore.
 */

export interface LaunchInfo {
  name: string;
  /** ISO timestamp */
  net: string;
  /** Human-readable date/time */
  windowStart: string;
  status: string;
  padName: string;
  provider: string;
  /** Hours until launch */
  hoursAway: number;
}

const LAUNCH_API = "https://ll.thespacedevs.com/2.3.0/launches/upcoming/";

/**
 * Fetch the next 3 launches from Cape Canaveral / KSC.
 * Returns empty array on any error — launch alerts are advisory, not critical.
 */
export async function getUpcomingLaunches(): Promise<LaunchInfo[]> {
  try {
    const url = new URL(LAUNCH_API);
    url.searchParams.set("limit", "3");
    url.searchParams.set("location__ids", "12,27"); // KSC + Cape Canaveral
    url.searchParams.set("ordering", "net");

    const response = await fetch(url.toString(), {
      next: { revalidate: 1800 }, // Cache for 30 min
      signal: AbortSignal.timeout(6000),
    });

    if (!response.ok) return [];

    const data = await response.json();
    const now = Date.now();

    return (data.results ?? []).map(
      (launch: {
        name?: string;
        net?: string;
        window_start?: string;
        status?: { name?: string };
        pad?: { name?: string; location?: { name?: string } };
        launch_service_provider?: { name?: string };
      }) => {
        const launchTime = new Date(launch.net ?? "").getTime();
        const hoursAway = (launchTime - now) / (1000 * 60 * 60);

        return {
          name: launch.name ?? "Unknown",
          net: launch.net ?? "",
          windowStart: launch.window_start ?? "",
          status: launch.status?.name ?? "Unknown",
          padName: launch.pad?.name ?? "Unknown",
          provider: launch.launch_service_provider?.name ?? "Unknown",
          hoursAway: Math.round(hoursAway * 10) / 10,
        };
      }
    );
  } catch {
    return [];
  }
}

/**
 * Check if any launch is within 48 hours — triggers alert cards.
 */
export function hasImmediateLaunch(launches: LaunchInfo[]): boolean {
  return launches.some((l) => l.hoursAway >= -2 && l.hoursAway <= 48);
}
