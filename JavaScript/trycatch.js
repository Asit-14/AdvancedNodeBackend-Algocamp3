try {
	let x = undefined;
	console.log(x[0]);
	
} catch (err){
	console.log("Error handling in catch ",err);
	
} finally {
	console.log("Finaly is alwayese execcute");
}