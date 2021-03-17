//html内で値を探す関数を定義
function Search(text){
  
// keywords-listの全てを取得
$('.keywords-list').each(function(index,element){
  
  // elementには、取得したHTML要素が格納されている、「$(element)」としkeyword-list要素を取得
  // 「text()」を使って要素のテキスト文字を取得する
  let keyword = $(element).text();
  
  // 文字列を検索するためのindexOfメソッド
  // 対象の文字列.indexOf(検索する文字列)
  if(keyword.indexOf(text) === -1){
    $(element).parent().css("display", "none");
        }else{
            $(element).parent().css("display", "block");
        }
  
});
}

$("#inputtext").on("input", function(event){
    let text = $("#inputtext").val();
    if(text === ""){
        $(".keywordbox").css("display", "block");
    }else{
        Search(text);
    }
});