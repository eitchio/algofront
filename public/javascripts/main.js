

//API call to register as user

$("#register").on("click", ()=>{
    register($("#name").val(),$("#password").val(),$("#email").val())
})



axios.defaults.withCredentials = false
axios.defaults.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }

 register = (username,password,email) => {
 	console.log(name,password,email)
	axios.post("http://127.0.0.1:8000/signup/",$.param({
		username:name,
		password:password,
		email:email
	}))
	.then((response) => {
		console.log(response);
		if(response.data.status === "success") {
			$('.signin-flex').hide();
            $('#signin-link').hide();
            $('.logo').show();
            $('#account').show();
            $('#signin-form').clearForm();
            $('.credits').show();
		} else {
			console.log(error);
		}
		
	})
	.catch((error) => {console.log(error)});

}

//API call to log in as user

$("#signin").on("click", ()=>{
    login($("#username").val(),$("#password").val(),$("#email").val())
})



axios.defaults.withCredentials = false
axios.defaults.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }

 login = (username,password) => {
 	console.log(username,password)
	axios.post("http://127.0.0.1:8000/login/",$.param({
		username:username,
		password:password
	}))
	.then((response) => {
		console.log(response);
		if(response.data.status === "success") {
            $('.signin-flex').hide();
            $('#signin-link').hide();
            $('.logo').show();
            $('#account').show();
            $('#signin-form').clearForm();
            $('.credits').show();
		} else {
			$("#body").html("<p>Error</p>")
		}
		
	})
	.catch((error) => {console.log(error)});

}


//API call to log out as user





//API call to populate "Algorithm listing" page

var url = 'https://opentdb.com/api.php?amount=4';

axios.get(url)
.then(function(res) {
    console.log(res.data.results[2].incorrect_answers[1]);

    var algoCard = "";
    for (var i = 0; i < res.data.results.length; i++) {
        algoCard += '<div class="algo-box">'
        algoCard += '<h3 class="algo-name">'+res.data.results[i].category + '</h3>'
        algoCard += '<p class="algo-description">'+res.data.results[i].question + '</p>'
        algoCard += '<div class="pill-box">'
        algoCard += '<p class="pill-box-item">Algorithm price:<br> 95 credits</p>'
        algoCard += '<p class="pill-box-item">Time to run:<br> 2.45s</p>'
        algoCard += '<p class="pill-box-item">Rating:<br> 9.6</p>'
        algoCard += '</div>'
        algoCard += '<div class="dev-summary">'
        algoCard += '<p class="api-calls">API calls: 171 293</p>'
        algoCard += '<p class="date-created">Date created: 19 Dec 2017</p>'
        algoCard += '<p class="author">Author: '+res.data.results[i].incorrect_answers[1] +'</p>'
        algoCard += '</div></div>'
    }
    $('.algo-listing').append(algoCard);
    
})
.catch(function(e) {
    console.log(e);
})

//function to clear form data after submitting information
$.fn.clearForm = function() {
    return this.each(function() {
      var type = this.type, tag = this.tagName.toLowerCase();
      if (tag == 'form')
        return $(':input',this).clearForm();
      if (type == 'text' || type == 'password' || tag == 'textarea')
        this.value = '';
    });
  };
 
  /* No longer needed with Node JS

//hide certain elements on page load
$(document).ready(function() {
//    $('.signin-flex').hide();
    $('#account').hide();
    $('.credits').hide();
});


//create sign-in pop-up when clicking "sign in"
$('body').on('click', '#signin-link', function() {
    $('.logo').hide();
    $('.signin-flex').show();
})
*/

/* Dropdown menu on right sidebar of algorithms listing */
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropDown() {
    document.getElementById("sortDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("sortDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}


/* TO DO: only (this) div should hide/show */

$(document).ready(function() {
        $('.collapse').hide();
        $('.algo-box-img').hide();
    });

$('body').on('click', '.expand', function() {
        $('.expand').hide();
        $('.collapse').show();
        $('.algo-box-img').show();
    })



$('body').on('click', '.collapse', function() {
    $('.collapse').hide();
    $('.expand').show();
    $('.algo-box-img').hide();
})
