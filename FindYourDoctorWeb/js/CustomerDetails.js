var getCustomerDetails = function(form) {

    var url = "GetCustomerDetails.php?";
    // var url = "http://localhost:8080/findYourDoctor/physicians?";

    if ($("#branchName").val().length != 0) {
        url += "branchName=" + $("#branchName").val();
    }

    $.ajax({
        url : url,
        contentType : "application/json",
        success : function(result) {
            $("#CustomersDiv").kendoGrid({
                dataSource : {
                    data : JSON.parse(result).data,
                    pageSize : 20
                },
                height : 550,
                groupable : false,
                sortable : true,
                pageable : {
                    refresh : true,
                    pageSizes : true,
                    buttonCount : 5
                },
                change : function(e) {
                    var selectedRows = this.select();
                    var selectedDataItems = [];
                    for (var i = 0; i < selectedRows.length; i++) {
                        var dataItem = this.dataItem(selectedRows[i]);
                        selectedDataItems.push(dataItem);
                    }
                },
                columns : [ {
                    field : "name",
                    title : "Name",
                    width : 240
                }, {
                    title : "Street",
                    field : "street"
                }, {
                    title : "City",
                    field : "city"
                } ]
            });
        },
        failure : function(result) {
            debugger;
        }
    });
};

var createCustomer =  function(inputForm) {

    var url = "InsertCustomer.php?";
    // var url = "http://localhost:8080/findYourDoctor/physicians?";
    
    var data = {
            "name" : inputForm['name'].value,
            "street" : inputForm['street'].value,
            "city" : inputForm['city'].value
    }
    

    $.ajax({
        url : url,
        contentType : "application/json",
        type: "POST",
        data: data,        
        success : function(result) {
            $("#CustomersDiv").kendoGrid({
                dataSource : {
                    data : JSON.parse(result).data,
                    pageSize : 20
                },
                height : 550,
                groupable : false,
                sortable : true,
                pageable : {
                    refresh : true,
                    pageSizes : true,
                    buttonCount : 5
                },
                columns : [ {
                    field : "name",
                    title : "Name",
                    width : 240
                }, {
                    title : "Street",
                    field : "street"
                }, {
                    title : "City",
                    field : "city"
                } ]
            });
        },
        failure : function(result) {
            debugger;
        }
    });
};