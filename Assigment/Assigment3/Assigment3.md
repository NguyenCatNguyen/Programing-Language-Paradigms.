Assignment No. 3
EECS 368
Programming Language Paradigms
Due: 11:59 PM, Monday, October 3, 2022
Submit deliverables in a single zip file to Canvas
Name of the zip file: FirstnameLastname_Assignment3 (with your first and last name)
Name of the Assignment folder within the zip file: FirstnameLastname_Assignment3

Deliverables:
1. Copy of Rubric3.docx with your name and ID filled out (do not submit a PDF)
2. HTML source code.

Assignment:  
• Tabbed panels are widely used in user interfaces.  
• They allow you to select an interface panel by choosing from a number of tabs
“sticking out” above an element.
• In this assignment you must implement a simple tabbed interface using JavaScript
and HTML.  
• Write a function, asTabs, that takes a DOM node and creates a tabbed interface
showing the child elements of that node.  
• It should insert a list of <button> elements at the top of the node, one for each
child element, containing text retrieved from the data-tabname attribute of the
child.  
• All but one of the original children should be hidden (given a display style of
none).  
• The currently visible node can be selected by clicking the buttons.
• Color the button for the currently selected tab red so that it is obvious which tab is
selected.
• Color the rest of the buttons blue.
• The title of your web page (i.e., what shows up in the webpage tab title, not the
tabs in your web page) should be “Your Last Name’s Jayhawk Page”, where
“Your Last Name” is your last name (e.g., “Johnson’s Jayhawk Page”).
• The grader must be able to simply click on your source file and display the web
page.
• On startup, the web page should display “Rock” highlighted and the text “Rock
...” displayed
• Hint:
<tab-panel>
      <div data-tabname="Rock">Rock ...</div>
      <div data-tabname="Chalk">Rock Chalk ...</div>
      <div data-tabname="Jayhawk">Rock Chalk Jayhawk - Go KU!</div>
</tab-panel>

<script>
  function asTabs(node) {
    // Your code here.
  }
  asTabs(document.querySelector("tab-panel"));
</script>
• Feel free to use the hints and sandbox from the Tabs exercise in Chapter 15. Note,
this solution is a rather complicated program and if you use any part of it you will
need to explain in the comments what it is doing in significant detail.
• Provide comments for the JavaScript code that explain what each line of code is
doing. See rubric below. You do not have to comment the HTML code.


<!-- Tab links -->
<div class="tab">
  <button class="tablinks" onclick="openCity(event, 'London')">London</button>
  <button class="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
  <button class="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button>
</div>

<!-- Tab content -->
<div id="London" class="tabcontent">
  <h3>London</h3>
  <p>London is the capital city of England.</p>
</div>

<div id="Paris" class="tabcontent">
  <h3>Paris</h3>
  <p>Paris is the capital of France.</p> 
</div>

<div id="Tokyo" class="tabcontent">
  <h3>Tokyo</h3>
  <p>Tokyo is the capital of Japan.</p>
</div>



function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

