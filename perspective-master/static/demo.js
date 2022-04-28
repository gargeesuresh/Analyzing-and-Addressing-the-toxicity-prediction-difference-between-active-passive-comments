

window.onload = function() {
    // document.addEventListener('click',myFunction)

  var pS = document.getElementById('prob-statement')
  pS.addEventListener('click',function(){
    console.log("clicked");
    document.getElementById('prob-li').classList.add('active-li')
    document.getElementById('sim-li').classList.remove('active-li')
    document.getElementById('fix').style.display ='none'
    document.getElementById('fix-order').style.display ='none'
    document.getElementsByClassName('hide')[0].style.display = 'none'
    document.getElementsByClassName('hide-order')[0].style.display = 'none'
    $('.activeT').html('')
    $('.active-bar').width(0)
    $('.passiveT').html('')
    $('.passive-bar').width(0)
    $('.differ').html('')
    $('.avg').html('')
    $('.difference-bar').width(0)
    $('.avg-bar').width(0)
    $('.min').html('')
    $('.min-bar').width(0)
    $('.max').html('')
    $('.max-bar').width(0)
    $('.wavg').html('')
    $('.wavg-bar').width(0)
  })

  var sS = document.getElementById('sim-li')
  sS.addEventListener('click',function(){
    console.log("clicked");
    document.getElementById('sim-li').classList.add('active-li')
    document.getElementById('prob-li').classList.remove('active-li')
    document.getElementById('fix').style.display ='inline-block'
    document.getElementById('fix-order').style.display ='inline-block'
    $('.activeT').html('')
    $('.active-bar').width(0)
    $('.passiveT').html('')
    $('.passive-bar').width(0)
    $('.differ').html('')
    $('.avg').html('')
    $('.difference-bar').width(0)
    $('.avg-bar').width(0)
    $('.min').html('')
    $('.min-bar').width(0)
    $('.max').html('')
    $('.max-bar').width(0)
    $('.wavg').html('')
    $('.wavg-bar').width(0)
  })
   
  var subV = document.getElementById('submit-btn-voice')
    subV.addEventListener('click',onSubmitClick)
  var subO = document.getElementById('submit-btn-order')
    subO.addEventListener('click',onOrderSubmitClick)



  var fixV = document.getElementById('fix')
    fixV.addEventListener('click',function(){
      console.log("clicked");
      document.getElementsByClassName('hide')[0].style.display = 'block'
    })


  var fixO= document.getElementById('fix-order')
    fixO.addEventListener('click',function(){
      document.getElementsByClassName('hide-order')[0].style.display = 'block'
    })
    

    var element1 = document.getElementById('type')
    element1.addEventListener('change',changeType)

    document.getElementById('reordered-container').style.display = 'none'
    document.getElementById('voice-container').style.display = 'block'
    // document.getElementById('toxic-group').style.display = 'none'



    
  //   console.log();
  //   if (picture_type == ) {
  //     document.getElementById('picture_div').innerHTML = '<a href="predefined_pics.php">Click here</a> to select one.';
  // }
    
    
  };

  function onSubmitClick() {

    document.getElementsByClassName('hide')[0].style.display = 'none'
    active = document.getElementById('active1').value
    passive = document.getElementById('passive1').value
    
   $.ajax({
          type: "POST",
          url: "/",
          // data: JSON.stringify(postD ata), // or JSON.stringify ({name: 'jonas'}),
          data: JSON.stringify({active:active ,passive : passive}), // or JSON.stringify ({name: 'jonas'}),
          success: function(data) {
            $('.activeT').html(data['activeT'])
            $('.active-bar').width(data['activeT']+'%')
            $('.passiveT').html(data['passiveT'])
            $('.passive-bar').width(data['passiveT']+'%')
            $('.differ').html(data['diff'])
            $('.avg').html(data['avg'])
            $('.difference-bar').width(data['diff']+'%')
            $('.avg-bar').width(data['avg']+'%')
            $('.min').html(data['min'])
            $('.min-bar').width(data['min']+'%')
            $('.max').html(data['max'])
            $('.max-bar').width(data['max']+'%')
            $('.wavg').html(data['wAvg'])
            $('.wavg-bar').width(data['wAvg']+'%')
            
            
            
          
          },
            
          contentType: "application/json",
          dataType: 'json'
      });
    
  }
  function onOrderSubmitClick() {

    document.getElementsByClassName('hide-order')[0].style.display = 'none'
    active = document.getElementById('active2').value
    passive = document.getElementById('passive2').value
    
   $.ajax({
          type: "POST",
          url: "/",
          // data: JSON.stringify(postD ata), // or JSON.stringify ({name: 'jonas'}),
          data: JSON.stringify({active:active ,passive : passive}), // or JSON.stringify ({name: 'jonas'}),
          success: function(data) {
            $('.activeT').html(data['activeT'])
            $('.active-bar').width(data['activeT']+'%')
            $('.passiveT').html(data['passiveT'])
            $('.passive-bar').width(data['passiveT']+'%')
            $('.differ').html(data['diff'])
            $('.avg').html(data['avg'])
            $('.difference-bar').width(data['diff']+'%')
            $('.avg-bar').width(data['avg']+'%')
            $('.min').html(data['min'])
            $('.min-bar').width(data['min']+'%')
            $('.max').html(data['max'])
            $('.max-bar').width(data['max']+'%')
            $('.wavg').html(data['wAvg'])
            $('.wavg-bar').width(data['wAvg']+'%')
            
            
            
          
          },
            
          contentType: "application/json",
          dataType: 'json'
      });
    
  }




  function changeType() {
    var element2 = document.getElementById('type')
    console.log(element2.value);
            $('.activeT').html('')
            $('.active-bar').width(0)
            $('.passiveT').html('')
            $('.passive-bar').width(0)
            $('.differ').html('')
            $('.avg').html('')
            $('.difference-bar').width(0)
            $('.avg-bar').width(0)
            $('.min').html('')
            $('.min-bar').width(0)
            $('.max').html('')
            $('.max-bar').width(0)
            $('.wavg').html('')
            $('.wavg-bar').width(0)
    
    if (element2.value == 'voice') {
      document.getElementById('reordered-container').style.display = 'none'
      document.getElementById('voice-container').style.display = 'block'
    }
    else{
      document.getElementById('voice-container').style.display = 'none'
      document.getElementById('reordered-container').style.display = 'block'
    }
    
  }