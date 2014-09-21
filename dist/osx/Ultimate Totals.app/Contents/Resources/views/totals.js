<script id="totals-view" type="text/template">
'
<h1 class='title'>Ultimate Totals</h1>
<p class='title-text'> Beat the bookies and win with UTotals!</p>
<div class='game-div'>
  <div class='left team-game'>
    <div class='top'>
      <label>SELECT TEAM</label>
      <select class="team-select"></select>
      <label>SCORE TYPE</label>
      <select class='score-select'>
        <option value='all'>All Games</option>
        <option value='home'>Home Games</option>
        <option value='away'>Away Games</option>
      </select>
    </div>
    <div class='bottom'>
      <input type='text' name='score_1' placeholder='Score' />
      <input type='text' name='score_2' placeholder='Score' />
      <input type='text' name='score_3' placeholder='Score' />
      <button class='white-btn add-score'>Add Score</button>
    </div>
  </div>
  <div class='right team-game'>
    <div class='top'>
      <label>SELECT TEAM</label>
      <select class="team-select"></select>
      <label>SCORE TYPE</label>
      <select class='score-select'>
        <option value='all'>All Games</option>
        <option value='home'>Home Games</option>
        <option value='away'>Away Games</option>
      </select>
    </div>
    <div class='bottom'>
      <input type='text' name='score_1' placeholder='Score' />
      <input type='text' name='score_2' placeholder='Score' />
      <input type='text' name='score_3' placeholder='Score' />
      <button class='white-btn add-score'>Add Score</button>
    </div>
  </div>
  <div class='button-div'>
    <button class='blue-btn calc'>Run Totals</button>
    <button class='blue-btn calc-all'>All Teams</button>
    <button class='blue-btn save-game'>Save Game</button>
  </div>
</div>
<div class="results-div">
  <h2>RESULTS</h2>
  <table class='tablesorter results-table'>
    <thead>
    </thead>
    <tbody>
    </tbody>
  </table>
</div>
'
</script>
