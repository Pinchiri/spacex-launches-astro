import type { Doc, APISpaceXResponse } from "@/types/api";

export const getLaunchesSorted = async (sortType: string) => {

const response = await fetch("https://api.spacexdata.com/v5/launches/query", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: {},
    options: {
      sort: {
        flight_number: sortType,
      },
      limit: 21,
    },
  }),
});

const { docs: launches } = (await response.json()) as APISpaceXResponse;
return launches;
}

export const getLaunchById = async ({id}: {id: string}) => {

  const response = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  const launch = (await response.json()) as Doc;

  return launch;
  }