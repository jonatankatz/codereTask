import { makeAutoObservable } from "mobx";
import axios from "axios";

class OddsStore {
  oddsList = []; // Global list of odds
  sortedOddsList = []; // For the dropdown-sorted odds

  constructor() {
    makeAutoObservable(this);
  }

  // Action to fetch the odds data from the API
  fetchOdds = async () => {
    const apiUrl =
      "https://inicio-banner-server-51647ce90258.herokuapp.com/games";
    try {
      const response = await axios.get(apiUrl);
      this.oddsList = response.data[0].db;

      this.sortOddsByDate(); // Initial sort by date after fetch
    } catch (error) {
      console.error("Error fetching odds data:", error);
    }
  };

  // Sorting odds by date (default)
  sortOddsByDate = () => {
    this.sortedOddsList = [...this.oddsList].sort(
      (a, b) => new Date(a.startDate) - new Date(b.startDate)
    );
  };

  // Sorting odds alphabetically by team name
  sortOddsByName = (order = "asc") => {
    this.sortedOddsList = [...this.oddsList].sort((a, b) => {
      if (order === "asc") {
        return a.name?.localeCompare(b.name);
      } else {
        return b.name?.localeCompare(a.name);
      }
    });
  };

  // Add a new match to the odds list (used in the Bonus part)
  addNewMatch = (newMatch) => {
    this.oddsList.push(newMatch);
    this.sortOddsByDate(); // Re-sort the list after adding
  };

  betOnResult = (matchIndex, bet) => {
    const correntList = [...this.sortedOddsList];
    correntList[matchIndex].bet = bet;
    this.sortedOddsList = correntList;
    return this.sortedOddsList;
  };
}

export const oddsStore = new OddsStore();
