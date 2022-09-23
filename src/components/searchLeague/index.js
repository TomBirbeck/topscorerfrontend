export default function SearchByLeague({ setPlayers }) {
    async function leagueSearch(e) {
          e.preventDefault();
          const input = e.target.value;
          let res = await fetch(
              `https://topscorers.herokuapp.com/topscorer?league=${input}`
          );
          let data = await res.json();
          setPlayers(data.payload);
      }
  
      return (
        <div>
          <form className="league-search-form">
            <label>Seach by League </label>
            <select
              name="searchInput"
              className="league-search"
              onChange={leagueSearch}
              defaultValue="initial"
            >
              <option value="initial" disabled hidden>
                Select option
              </option>
              <option value="epl">English Premier League</option>
              <option value="La Liga">La Liga</option>
              <option value="Ligue 1">Ligue 1</option>
              <option value="Bundesliga">Bundesliga</option>
              <option value="Serie A">Serie A</option>
              <option value="0">Default</option>
            </select>
          </form>
        </div>
      );
    }