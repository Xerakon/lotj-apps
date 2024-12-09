<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="Xerakon's LotJ Apps // CharGen Ideas">
	<meta name="author" content="@Xerakon">
	<title>Xerakon's LotJ Apps // CharGen Ideas</title>

	<!-- Reference Bootstrap and custom CSS files. -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
	<link rel="stylesheet" href="css/style.css">

	<!-- Reference Bootstrap and custom JS files. -->
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
	<script type="module" src="js/chargen.js"></script><!-- Include chargen JS -->
	<script src="js/planner.js"></script><!-- Include custom JS -->

	<?php
		$json = file_get_contents("../../../../chargen_root/showrace.json");
		$races = json_decode($json, true);
		ksort($races);
	?>

	<!-- Port $json from PHP to JS -->
	<script>
		var jsonData = <?php echo $json; ?>;
	</script>
</head>
<body>
	<!-- Navbar -->
	<nav class="navbar navbar-expand-md navbar-dark bg-dark bg-primary">
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
			<span class="navbar-toggler-icon"></span>
		</button><!-- /navbar-toggler -->
		<a class="navbar-brand" href="/lotj">Xerakon's LotJ Apps</a>
		<div class="navbar-collapse collapse" id="navbarContent">
			<ul class="navbar-nav ml-auto">
				<!--<input type="button" class="btn btn-outline-light" value="Race" onClick="showhideDiv('raceInfo')"/>&nbsp;-->
				<input type="button" class="btn btn-outline-warning" value="Help" data-target="#websitehelpModal" data-toggle="modal"/>&nbsp;
				<a href="/lotj/index.html"><input type="button" class="btn btn-outline-primary" value="Race Info"/></a>&nbsp;
				<a href="/lotj/colorcheck.html"><input type="button" class="btn btn-outline-success" value="Color Checker"/></a>&nbsp;
				<a href="/lotj/chargen.php"><input type="button" class="btn btn-outline-danger" value="CharGen Ideas"/></a>
			</ul><!-- /navbar nav -->
		</div><!-- /navbarContent -->
	</nav><!-- /navbar -->

  <br>

	<?php
		include '../../../../chargen_root/chargen_tables.php';

		$raceList = [];
		$freeList = [];

		foreach ($races as $race) {
			array_push($raceList, $race['race']);
			if ($race['price'] == 0 & $race['deposit'] == 0) {
				array_push($freeList, $race['race']);
			}
		}

		//echo '<pre>'; print_r($freeList); echo '</pre>';

		$randHeading = array_rand($headingList);
		$randAdjective = array_rand($adjectiveList);
		$randRace = array_rand($raceList);
		$randJob = array_rand($jobList);
		$randLocation = array_rand($locationList);
		$randBackstory = array_rand($backstoryList);
		$randResponse = array_rand($responseList);

		$preString = $adjectiveList[$randAdjective] . " ";
		$postString = "  from " . $locationList[$randLocation] . " who " . $backstoryList[$randBackstory];

		$fullString = $adjectiveList[$randAdjective] . " " . $raceList[$randRace] . " " . $jobList[$randJob] . " from " . $locationList[$randLocation] . " who " . $backstoryList[$randBackstory];
	?>

	<!-- Race Info -->
	<div id="raceInfo" style="display:block;">
		<div class="row no-gutters">
			<div class="md-col-12">
				<div class="innerContainer">
					<div id="testArea"></div>
					<p><span class="littleFont" id="headingDisplay"></span></p>
					<p>
						<span class="bigFont" id="chargenDisplay"></span>
					</p>
					<p class="text-primary"><u><span class="littleFont" id="responseDisplay"></span></u></p>
					<br><br><br><br>
					<p>Have a suggestion? <a href="mailto:xerakon@legendsofthejedi.com">Email Xerakon</a>.</p>
				</div><!-- /.innerContainer -->
			</div><!-- /.md-col-12 -->
		</div><!-- /.row .nogutters -->
	</div><!-- /#raceInfo -->

	<!-- modals -->
	<!-- website help modal -->
	<div class="modal fade" id="websitehelpModal" tabindex="-1" role="dialog" aria-labelledby="websitehelpModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="websitehelpModalLabel">Website Help</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div><!-- /.modal-header -->
				<div class="modal-body">
					This website is designed with the intention of assisting players to plan out characters on Legends of the Jedi (LotJ) MUD ahead of character creation.
					<br><br>
					<h4><font color="#FFFFFF">Credits</font></h4>
					Concept and code by <a href="mailto:xerakon@gmail.com">@Xerakon</a>.
					<br><br>
					<h4><font color="#FFFFFF">Updates</font></h4>
					Help Files:&nbsp;&nbsp;&nbsp;&nbsp;July 24, 2022.<br>
					Showrace:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;October 1, 2024.<br>
					Skills List:&nbsp;&nbsp;&nbsp;October 2, 2024.<br>
					Templates:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;October 2, 2024.<br>
					Website:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;October 2, 2024.
				</div><!-- /.modal-body -->
				<div class="modal-footer">
					<button type="button" class="btn btn-outline-danger" data-dismiss="modal">Close</button>
				</div><!-- /.modal-footer -->
			</div><!-- /.modal-content -->
		</div><!-- /.modal-dialog -->
	</div><!-- /#websitehelpModal -->

  </body>
</html>