import react from 'react'
import './search.css'
//import './SeSearch.js'

function Search(){
  
    return(
      <>
        <div class='h'>
            <div class="box">
    <input type="checkbox" id="check"/>
    <div class="search-box">
      <input type="text" placeholder="Type here..."/>
      <label for="check" class="icon">
        <i class="fas fa-search"></i>
      </label>
    </div>
  </div>
       
        </div>
        <script src="js/SeSearch.js"></script>
        </>
    )
}
export default Search