export default function SearchBySeason({ setPlayers }) {
  async function seasonSearch(e) {
		e.preventDefault();
		const input = e.target.value;
		let res = await fetch(
			`https://topscorers.herokuapp.com/topscorer/year/${input}`
		);
		let data = await res.json();
		setPlayers(data.payload);
	}

    return (
      <div>
        <form className="year-search-form">
          <label>Seach by Season </label>
          <select
            name="searchInput"
            className="season-search"
            onChange={seasonSearch}
            defaultValue="initial"
          >
            <option value="initial" disabled hidden>
              Select option
            </option>
            <option value="1992">1992/93</option>
            <option value="1993">1993/94</option>
            <option value="1994">1994/95</option>
            <option value="1995">1995/96</option>
            <option value="1996">1996/97</option>
            <option value="1997">1997/98</option>
            <option value="1998">1998/99</option>
            <option value="1999">1999/00</option>
            <option value="2000">2000/01</option>
            <option value="2001">2001/02</option>
            <option value="2002">2002/03</option>
            <option value="2003">2003/04</option>
            <option value="2004">2004/05</option>
            <option value="2005">2005/06</option>
            <option value="2006">2006/07</option>
            <option value="2007">2007/08</option>
            <option value="2008">2008/09</option>
            <option value="2009">2009/10</option>
            <option value="2010">2010/11</option>
            <option value="2011">2011/12</option>
            <option value="2012">2012/13</option>
            <option value="2013">2013/14</option>
            <option value="2014">2014/15</option>
            <option value="2015">2015/16</option>
            <option value="2016">2016/17</option>
            <option value="2017">2017/18</option>
            <option value="2018">2018/19</option>
            <option value="2019">2019/20</option>
            <option value="2020">2020/21</option>
            <option value="2021">2021/22</option>
            <option value="0">Default</option>
          </select>
        </form>
      </div>
    );
  }