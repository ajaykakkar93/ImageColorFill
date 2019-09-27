//,"css!./style.css"
define( ["qlik", "text!./template.html"],
	function ( qlik, template ) {

		return {
		definition : {
			type : "items",
			component : "accordion",
			items: {
					measures: {
						uses: "measures",
						min: 1,
						max:1
					},
					Settings_Kpi: {
						label:"KPI Settings",
						type : "items",
						items:{
							//start
							ImgWidth: {
								type: "integer",
								ref: "ImgWidth",
								label: "Width in %",
								expression: "optional",
								defaultValue:"80"
							},
							ImgHeight: {
								type: "integer",
								ref: "ImgHeight",
								label: "Height in %",
								expression: "optional",
								defaultValue:"90"
							},
							MyMedia: {
								label:"My media",
								component: "media",
								ref: "myMedia",
								layoutRef: "myMedia",
								type: "string"
							},
							bgColor: {
								type: "string",
								ref: "bgColor",
								label: "Fill BgColor",
								expression: "optional",
								defaultValue:"red"
							}
							/*
							Value: {
								type: "integer",
								ref: "Value",
								label: "Value Should be in %",
								expression: "optional"
							},
							*/
							//end
						}
					}
				}
			},
			template: template,
			support: {
				snapshot: true,
				export: true,
				exportData: false
			},
			paint: function ($element,layout) {
				var height=$element.height(),
					width=$element.width();
					layout.height=height;
					layout.width=width;
				return qlik.Promise.resolve();
			},
			resize: function($element,layout) {
				var height=$element.height(),
					width=$element.width();
					layout.height=height;
					layout.width=width;
			},
			controller: ['$scope', function ( $scope ) {
				//add your rendering code here
				console.log($scope.layout.height,$scope.layout.width);
			}]
		};

	} );

