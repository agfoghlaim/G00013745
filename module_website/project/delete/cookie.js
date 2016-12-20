	order = JSON.parse(localStorage.getItem('cart'));
			var output = "ff";
			var productName;
			//var product = 
			
			 for(i in order){
				if(order[i].amt > 0){
					 for(j=0;j<order[i].amt;j++){
			productName = order[i].name;
			
			$.post('cookie.php', {productName: productName},function(data){
			console.log(data);
			output += data+' ';
			$('#the-data').html(output);
			});
			
			
		

			}}}