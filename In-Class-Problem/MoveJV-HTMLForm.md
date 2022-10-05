
1. What value will this code show for the question mark (?)?
   - When we run this program, the value should be 14.
1. Comment each line of JavaScript showing how it calculated your
answer for No. 1.
```JavaScript
{
<select multiple>
<option value="1">0001</option>
<option value="2">0010</option>
<option value="4">0100</option>
<option value="g">1000</option>
</select> = <span id="output">0</span>
<script>
let select = document.querySelector("select");
// select is the variable that store the value of the select tag.
let output = document.querySelector("#output"):
// output is the variable that store the value of the span tag.
select.addEventListener("change", () => {
// addEventListener is the function that add the event listener to the select tag.
let number = 0:
for (let option of Array.from(select.options))
// Array.from is the function that convert the select.options to an array.
if (option.selected) {
number += Number(option.value):
// Number is the function that convert the string to number.
output.textContent = number:
// textContent is the property that store the value of the span tag.
}
}); 
</script>
}
```


