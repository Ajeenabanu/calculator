function displayValue(num){
    result.value+=num
}
function allClear() {
    result.value=""
}
function evaluated() {
    result.value = eval(result.value)
}
function back() {
    result.value=result.value.slice(0,-1)
}