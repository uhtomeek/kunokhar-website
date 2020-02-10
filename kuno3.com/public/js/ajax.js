
	function check(info)
	{
		if(info != "")
		{
			return true;
		}
	}


///user admin access
    $('#login').click(function(e)
    {
        e.preventDefault();
        var email = $('#email').val();
        var password = $('#password').val();
        if(email !="" && password !="")
        {
        	$.ajax(
        	{
        		method: 'POST',
        		url: '../models/controller.php',
        		data: {email: email, password: password, action: 'login'},
        		success: function(data)
        		{
                    if(data == "false")
                    {
                         $('#login_status').html("Incorrect credentials").addClass('w3-text-red');
                    }else
                    {
                        window.location.replace("./admin.php");
                    }

        		},
        		error: function(data)
        		{
        			$('#login_status').html(data).addClass('w3-text-red');
        		}
        	});
        }else
        {
            $('#login_status').html("All fields are required").addClass('w3-text-red');
        }

    });

	$('#add_article').click(function(e)
	{
		e.preventDefault();
		var cat_id = $('#cat_id').val();
		var heading = $('#heading').val();
		var content = CKEDITOR.instances['content'].getData();

		if(cat_id != "" && heading != "" && content != "")
		{
			$.ajax(
			{
				method: 'POST',
				url: '../models/controller.php',
				data: {cat_id: cat_id, heading: heading, content: content, action: 'add_article'},
				success: function(data)
				{
					$('#add_status').removeClass('alert alert-danger');
					$('#add_status').html(data).addClass('alert alert-success');
					setInterval(function(){ location.href = '../pages/view_categories.php'; }, 2000);
				},
				error: function(data)
				{
					$('#add_status').html(data);
				}
			});
		}else
		{
			$('#add_status').removeClass('alert alert-success');
			$('#add_status').html("All field are required").addClass('alert alert-danger');
		}
	});

	$('#add_cate').click(function(e)
	{
		e.preventDefault();
		var category = $('#category').val();

		if(category != "")
		{
			$.ajax(
			{
				method: 'POST',
				url: '../models/controller.php',
				data: {category: category, action: 'add_category'},
				success: function(data)
				{
					$('#add_status').removeClass('alert alert-danger');
					$('#add_status').html(data).addClass('alert alert-success');
					setInterval(function(){ location.href = '../pages/view_categories.php'; }, 2000);
				},
				error: function(data)
				{
					$('#add_status').html(data);
				}
			});
		}else
		{
			$('#add_status').removeClass('alert alert-success');
			$('#add_status').html("field is required").addClass('alert alert-danger');
		}
	});

	$('#add_job').click(function(e)
	{
		e.preventDefault();
		var job_id = $('#job_id').val();
		var job_title = $('#job_title').val();
		var job_position = $('#job_position').val();
		var job_location = $('#job_location').val();
		var job_expiry = $('#job_expiry').val();
		var job_description = CKEDITOR.instances['job_description'].getData();

		if(job_title != "" && job_position != "" && job_location != "" && job_expiry != "" && job_description != "")
		{
			$.ajax(
			{
				method: 'POST',
				url: '../models/controller.php',
				data: {job_title: job_title, job_position: job_position, job_location: job_location, job_expiry: job_expiry, job_description: job_description, action: 'add_job'},
				success: (data)=>
				{
					$('#add_status').removeClass('alert alert-danger');
					$('#add_status').html(data).addClass('alert alert-success');
					setInterval(function(){ location.href = '../pages/view_jobs.php'; }, 2000);
				},
				error: (data)=>
				{
					$('#add_status').html(data).addClass('alert alert-danger');;
				}
			});

		}else
		{
			$('#add_status').removeClass('alert alert-success');
			$('#add_status').html("All fields are required").addClass('alert alert-danger');
		}
	});


	$('#add_user').click(function(e)
	{
		e.preventDefault();
		var fname = $('#fname').val();
		var lname = $('#lname').val();
		var username = $('#username').val();
		var email = $('#email').val();
		var pwd = $('#pwd').val();
		var pwd_check = $('#pwd_check').val();

		if(check(fname) && check(lname) && check(username) && check(email) && check(pwd) && check(pwd_check))
		{
			if(pwd == pwd_check)
			{
				$.ajax(
				{
					method: 'POST',
					url: '../models/controller.php',
					data: {fname: fname, lname: lname, username: username, email: email, pwd: pwd, action: 'add_user'},
					success: function(data)
					{
						$('#add_status').removeClass('alert alert-danger');
						$('#add_status').html(data).addClass('alert alert-success');
						setInterval(function(){ location.href = '../pages/users.php'; }, 2000);
					},
					error: function(data)
					{
						$('#add_status').removeClass('alert alert-success');
						$('#add_status').html(data).addClass('alert alert-danger');
					}
				});

			}else
			{
				$('#add_status').removeClass('alert alert-success');
				$('#add_status').html("Make sure your passwords match!!!").addClass('alert alert-danger');
			}

		}else
		{
			$('#add_status').removeClass('alert alert-success');
			$('#add_status').html("All data is required").addClass('alert alert-danger');
		}

	});

	/// edit ajax

	$('#edit_cate').click(function(e)
	{
		e.preventDefault();
		var category_id = $('#category_id').val();
		var category = $('#category').val();

		if(category != "" && category_id != "")
		{
			$.ajax(
			{
				method: 'POST',
				url: '../models/controller.php',
				data: {category: category, category_id: category_id, action: 'edit_category'},
				success: function(data)
				{
					$('#add_status').removeClass('alert alert-danger');
					$('#add_status').html(data).addClass('alert alert-success');
					setInterval(function(){ location.href = '../pages/view_categories.php'; }, 2000);
				},
				error: function(data)
				{
					$('#add_status').html(data);
				}
			});
		}else
		{
			$('#add_status').removeClass('alert alert-success');
			$('#add_status').html("field is required").addClass('alert alert-danger');
		}
	});

	$('#edit_article').click(function(e)
	{
		e.preventDefault();
		var cat_id = $('#category').val();
		var article_id = $('#article_id').val();
		var heading = $('#heading').val();
		var content = CKEDITOR.instances['content'].getData();

		if(cat_id != "" && article_id != "" && heading != "" && content != "")
		{
			$.ajax(
			{
				method: 'POST',
				url: '../models/controller.php',
				data: {cat_id: cat_id, article_id: article_id, heading: heading, content: content, action: 'edit_article'},
				success: function(data)
				{
					$('#add_status').removeClass('alert alert-danger');
					$('#add_status').html(data).addClass('alert alert-success');
					setInterval(function(){ location.href = '../pages/view_articles.php'; }, 2000);
				},
				error: function(data)
				{
					$('#add_status').html(data);
				}
			});
		}else
		{
			$('#add_status').removeClass('alert alert-success');
			$('#add_status').html("All field are required").addClass('alert alert-danger');
		}
	});

$('#edit_job').click(function(e)
	{
		e.preventDefault();
		var job_id = $('#job_id').val();
		var job_title = $('#job_title').val();
		var job_position = $('#job_position').val();
		var job_location = $('#job_location').val();
		var job_expiry = $('#job_expiry').val();
		var job_description = CKEDITOR.instances['job_description'].getData();
		if(job_id != "" && job_title != "" && job_position != "" && job_location != "" && job_expiry != "" && job_description != "")
		{
			$.ajax(
			{
				method: 'POST',
				url: '../models/controller.php',
				data: {job_id: job_id, job_title: job_title, job_position: job_position, job_location: job_location, job_expiry: job_expiry, job_description: job_description, action: 'edit_job'},
				success: (data)=>
				{
					$('#add_status').removeClass('alert alert-danger');
					$('#add_status').html(data).addClass('alert alert-success');
					setInterval(function(){ location.href = '../pages/view_jobs.php'; }, 2000);
				},
				error: (data)=>
				{
					$('#add_status').html(data);
				}
			});

		}else
		{
			$('#add_status').removeClass('alert alert-success');
			$('#add_status').html("All fields are required").addClass('alert alert-danger');
		}
	});

$('#edit_user').click(function(e)
	{
		e.preventDefault();
		var user_id = $('#user_id').val();
		var fname = $('#fname').val();
		var lname = $('#lname').val();
		var username = $('#username').val();
		var email = $('#email').val();
		var pwd = $('#pwd').val();
		var pwd_check = $('#pwd_check').val();

		if(check(fname) && check(lname) && check(username) && check(email) && check(pwd) && check(pwd_check))
		{
			if(pwd == pwd_check)
			{
				$.ajax(
				{
					method: 'POST',
					url: '../models/controller.php',
					data: {user_id: user_id, fname: fname, lname: lname, username: username, email: email, pwd: pwd, action: 'edit_user'},
					success: function(data)
					{
						$('#add_status').removeClass('alert alert-danger');
						$('#add_status').html(data).addClass('alert alert-success');
						setInterval(function(){ location.href = '../pages/users.php'; }, 2000);
					},
					error: function(data)
					{
						$('#add_status').removeClass('alert alert-success');
						$('#add_status').html(data).addClass('alert alert-danger');
					}
				});

			}else
			{
				$('#add_status').removeClass('alert alert-success');
				$('#add_status').html("Make sure your passwords match!!!").addClass('alert alert-danger');
			}

		}else
		{
			$('#add_status').removeClass('alert alert-success');
			$('#add_status').html("All data is required").addClass('alert alert-danger');
		}

	});

	//add announcements

	$('#announcements_add_container').submit('form', function(e)
	{
		e.preventDefault();
		var form = document.querySelector('.announcement_form');
		var request = new XMLHttpRequest();

		var formData = new FormData(form);
		request.open('post', '../models/controller.php', true);
			//Send the proper header information along with the request
			//request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			request.onreadystatechange = function()
			{//Call a function when the state changes.
			    if(request.readyState == 4 && request.status == 200)
					{
			        $('.announcement_add_status').html(request.responseText);
							setInterval(function(){ location.href = '../pages/announcements.php'; }, 2000);
			    }else
					{
			    		$('.announcement_add_status').html(request.responseText);
			    }
			}
			request.send(formData);

	}, false);

	//edit announcement

		$('#announcements_edit_container').submit('form', function(e)
		{
			e.preventDefault();
			var form = document.querySelector('.announcement_edit_form');
			var request = new XMLHttpRequest();

			var formData = new FormData(form);
			request.open('post', '../models/controller.php', true);
				//Send the proper header information along with the request
				//request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
				request.onreadystatechange = function()
				{//Call a function when the state changes.
				    if(request.readyState == 4 && request.status == 200)
						{
				        $('.announcement_edit_status').html(request.responseText);
								setInterval(function(){ location.href = '../pages/announcements.php'; }, 2000);

				    }else
						{
				    		$('.announcement_edit_status').html(request.responseText);
				    }
				}
				request.send(formData);

		}, false);






//functions only

		//delete announcements
		function delete_announcement(id)
		{

			var r = confirm("Are you sure you want to delete an announcement? press okay if yes");
			if (r == true)
			{
				$.ajax(
				{
					method: 'POST',
					url: '../models/controller.php',
					data: {id: id, action: 'delete_announcement'},
					success: function(data)
					{
						console.log(data);
						setInterval(function(){ location.href = '../pages/announcements.php'; }, 2000);
					}
				});

			}

		}
//delete job
		function delete_job(id)
		{

			var r = confirm("Are you sure you want to delete a job? press okay if yes");
			if (r == true)
			{
				$.ajax(
				{
					method: 'POST',
					url: '../models/controller.php',
					data: {id: id, action: 'delete_job'},
					success: function(data)
					{
						console.log(data);
						setInterval(function(){ location.href = '../pages/view_jobs.php'; }, 2000);
					}
				});

			}

		}

//delete article
		function delete_article(id)
		{

			var r = confirm("Are you sure you want to delete an article? press okay if yes");
			if (r == true)
			{
				$.ajax(
				{
					method: 'POST',
					url: '../models/controller.php',
					data: {id: id, action: 'delete_article'},
					success: function(data)
					{
						console.log(data);
						setInterval(function(){ location.href = '../pages/view_articles.php'; }, 1000);
					}
				});

			}

		}

		function delete_category(id)
		{

			var r = confirm("Are you sure you want to delete a category? press okay if yes");
			if (r == true)
			{
				$.ajax(
				{
					method: 'POST',
					url: '../models/controller.php',
					data: {id: id, action: 'delete_category'},
					success: function(data)
					{
						console.log(data);
						setInterval(function(){ location.href = '../pages/view_categories.php'; }, 2000);
					}
				});

			}

		}

		window.onload = function(e)
		{
			$.ajax(
			{
				method: 'POST',
				url: 'models/controller.php',
				data: {action: 'visits'},
				success: function(data)
				{
					$('.counter-row').append(data);
				}
			});
		}