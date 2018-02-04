$(document).ready(function(){


	//Add your var's here!
	var account_one

	var debit_one

	var credit_one

	var account_two

	var debit_two

	var credit_two

	var account_three

	var debit_three

	var credit_three

	var account_four

	var debit_four

	var credit_four

	var event_date

	var months




  $("#submit").click(function(){

			function monthly_deferred_amount (){
				return Math.round(credit_three/months);

			};

			function arr_deferred_amounts (){
					var amount = monthly_deferred_amount();
					var a = [];
					for (var i = 1; i<= months; i++){

						a.push(amount);
					};
					return a;
			};

			function create_post_event_journal_entries (){


				var  	amounts = arr_deferred_amounts(),

				 			container = $('<div >');

				for (var i = 1; i<= amounts.length; i++){

					var starting_date = new Date($("#event_date").val()),

							posting_date = new Date(starting_date);

							posting_date.setMonth( posting_date.getMonth() + i);

							var curr_date = posting_date.getDate();

							var curr_month = posting_date.getMonth();

							var curr_year = posting_date.getFullYear();

							// posting_date = new Date(starting_date.setMonth(starting_date.getMonth()+ i ));


					container.append('<div id = "journal_entry_'+(i+1)+'"><h2>Journal Entry #' + (i + 1) + ':</h2><br>\
					<a class = "date">Date:'+ curr_year + '-' + curr_month + '-' + curr_date + '</a><br>\
						<a class = "line_one">\
						<a class = "account">'+ account_three +'</a>\
						<a class = "amount"> Dr. $'+ amounts[i-1]+'</a><br>'+
						'<a class = "account">' + account_four +'</a>'+
						'<a class = "amount"> Cr. $'+ amounts[i-1]+'</a>\
					</a><br>'
					+ '</div>');
				};

				$('#post_event_journal_entries').html(container);

			};


    account_one = $("#account_one").val();

    debit_one = $("#debit_one").val();

		credit_one = $("#credit_one").val();

		account_two = $("#account_two").val();

		debit_two = $("#debit_two").val();

		credit_two = $("#credit_two").val();

		account_three = $("#account_three").val();

		debit_three = $("#debit_three").val();

		credit_three = $("#credit_three").val();



		account_four = $("#account_four").val();

		debit_four = $("#debit_four").val();

		credit_four = $("#credit_four").val();

		event_date = $("#event_date").val();

		months = $("#months").val();

		$("#journal_entry_one").find('.posting_date').html(event_date);

		$("#journal_entry_one").find('.account_one').html(account_one+": ");

		$("#journal_entry_one").find('.debit_one').html(debit_one);

		$("#journal_entry_one").find('.account_two').html(account_three+": ");



		$("#journal_entry_one").find('.credit_two').html(credit_three)

		$("#journal_entry_one").find('.account_three').html(account_four+": ");

		$("#journal_entry_one").find('.credit_three').html(credit_four);


		// arr_deferred_amounts();

		create_post_event_journal_entries();

		// create_post_event_journal_entries();

	});

});


		// $("#journal_entry_two").find('.account_one').html(account_three+": ");
    //
		// $("#journal_entry_two").find('.debit_one').html(arr_deferred_amounts()[0]);
    //
		// $("#journal_entry_two").find('.account_two').html(account_four+": ");
    //
		// $("#journal_entry_two").find('.credit_two').html(arr_deferred_amounts()[0]);
