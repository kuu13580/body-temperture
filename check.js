const nameSelect = document.querySelector("#nameSelect");
// 氏名リスト
const namelist = ["東條", "古賀", "加藤", "杉浦", "南方", "吉海", "原"];
let nameListContents;
nameListContents += '<option value="" hidden>未選択</option>'
namelist.forEach(element => {
    nameListContents += `<option value="${element}">${element}</option>`
});
nameSelect.innerHTML = nameListContents;
// 温度
const temperatureSelect = document.querySelector("#temperatureSelect");
temperatureSelect.addEventListener("input", () => {
    document.querySelector("#temperatureView").innerHTML = Number(temperatureSelect.value).toPrecision(3) + "℃";
});
temperatureSelect.dispatchEvent(new Event("input"));
// 現在時刻入力
function currentDatetime() {
    const date = new Date();
    let yyyy = date.getFullYear();
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let dd = ("0" + date.getDate()).slice(-2);
    let hh = ("0" + date.getHours()).slice(-2);
    let minute = ("0" + date.getMinutes()).slice(-2);
    document.querySelector("#date").value = yyyy + '-' + month + '-' + dd;
    document.querySelector("#time").value = hh + ":" + minute;
}
document.querySelector("#currentDatetime").addEventListener("click", currentDatetime)
// 氏名保持
nameSelect.addEventListener("change",()=>{
    localStorage.setItem("name",nameSelect.value);
})
if(localStorage.getItem("name") != null) nameSelect.value = localStorage.getItem("name");