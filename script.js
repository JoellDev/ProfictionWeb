/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
//HomePage JS-------------------------------------------------------------------------------------------------------------------------------------------------------------------
function chanlogButtonsShow(){
    document.getElementById('changelog').style.display='none'; 
    document.getElementById('changelog_p').style.display='block';
    document.getElementById('changelog_hide').style.display='inline-block';
  }
  function chanlogButtonsHide(){
    document.getElementById('changelog_p').style.display='none'; 
    document.getElementById('changelog').style.display='inline-block'; 
    document.getElementById('changelog_hide').style.display='none';
  }
  document.getElementById("buttonDrop").onclick=function(){dropdownfunc()};
  function dropdownfunc(){
    document.getElementById('div_DropDown').classList.toggle('showDropdown');
  }
  
  var channelID = "UC_p6hepV_c-gC0e8sK45TWg";
  $.getJSON('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D'+channelID, function(data) {
     var link = data.items[0].link;
     var id = link.substr(link.indexOf("=")+1);
      $("#youtube_video").attr("src","https://youtube.com/embed/"+id + "?controls=0&showinfo=0&rel=0");
  });
  
  
  
  //About Us Page JS-----------------------------------------------------------------------------------------------------------------------------------------------------------
  function bioButtonsShow_J(){//biographies page function to show a bioagraphy individually as I'm not that great of a coder to have just one function do this/too lazy at the moment
    document.getElementById('Jian').style.display='block'; 
    document.getElementById('Jbutton_h').style.display='block';
    document.getElementById('Jbutton_s').style.display='none';
  }
  function bioButtonsHide_J(){
    document.getElementById('Jian').style.display='none';
    document.getElementById('Jbutton_h').style.display='none';
    document.getElementById('Jbutton_s').style.display='block';
  }
  function bioButtonsShow_Adr(){
    document.getElementById('Adrian').style.display='block'; 
    document.getElementById('Adrbutton_h').style.display='inline-block';
    document.getElementById('Adrbutton_s').style.display='none'; 
  }
  function bioButtonsHide_Adr(){//It pains me to do this
    document.getElementById('Adrian').style.display='none';
    document.getElementById('Adrbutton_h').style.display='none';
    document.getElementById('Adrbutton_s').style.display='inline-block'; 
  }
  function bioButtonsShow_Joe(){
    document.getElementById('Joel').style.display='block';
    document.getElementById('Joebutton_h').style.display='inline-block';
    document.getElementById('Joebutton_s').style.display='none';
  }
  function bioButtonsHide_Joe(){
    document.getElementById('Joel').style.display='none';
    document.getElementById('Joebutton_h').style.display='none';
    document.getElementById('Joebutton_s').style.display='inline-block';
  }
  function bioButtonsShow_N(){
  document.getElementById('Nathan').style.display='block';
    document.getElementById('Nbutton_h').style.display='inline-block';
    document.getElementById('Nbutton_s').style.display='none';
  }
  function bioButtonsHide_N(){
    document.getElementById('Nathan').style.display='none';
    document.getElementById('Nbutton_h').style.display='none';
    document.getElementById('Nbutton_s').style.display='inline-block';
  }
  function bioButtonsShow_Leo(){
    document.getElementById('Leo').style.display='block';
    document.getElementById('Leobutton_h').style.display='inline-block';
    document.getElementById('Leobutton_s').style.display='none';
  }
  function bioButtonsHide_Leo(){
    document.getElementById('Leo').style.display='none';
    document.getElementById('Leobutton_h').style.display='none';
    document.getElementById('Leobutton_s').style.display='inline-block';
  }
  function bioButtonsShow_Aks(){
    document.getElementById('Aksel').style.display='block';
    document.getElementById('Aksbutton_h').style.display='inline-block';
    document.getElementById('Aksbutton_s').style.display='none';
  }
  function bioButtonsHide_Aks(){
    document.getElementById('Aksel').style.display='none';
    document.getElementById('Aksbutton_h').style.display='none';
    document.getElementById('Aksbutton_s').style.display='inline-block';
  }
  function bioButtonsShow_Jon(){
    document.getElementById('Jon').style.display='block';
    document.getElementById('Jonbutton_h').style.display='inline-block';
    document.getElementById('Jonbutton_s').style.display='none';
  }
  function bioButtonsHide_Jon(){
    document.getElementById('Jon').style.display='none';
    document.getElementById('Jonbutton_h').style.display='none';
    document.getElementById('Jonbutton_s').style.display='inline-block';
  }
  function bioButtonsHide_All(){
    bioButtonsHide_Jon();
    bioButtonsHide_Aks();
    bioButtonsHide_Leo();
    bioButtonsHide_Joe();
    bioButtonsHide_Adr();
    bioButtonsHide_N();
    bioButtonsHide_J();
  }
  //Gaming Events JS---------------------------------------------------------------------------------------------------------------------------------
  var password_text = document.querySelector('.password_text');
  var password_submit = document.querySelector('.password_submit');
  password_text.focus();
  
  function pass_Check() {
    var passwordReal = String(password_text.value);
    alert("YO");
    passwordReal.value= '';
    if (passwordReal === "Veraped"){
      document.getElementById('Ranked').classlist.toggle('showRank');
    }
    password_text.value= '';
  }
  
  password_submit.addEventListener('click', pass_Check);
                                                                                               