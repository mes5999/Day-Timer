//Dom elements
var addSchedule_JQ = $("#addSchedule")
var limit_JQ = $("#limit")
var time_JQ = $("#time")
var saveButton_JQ = $("#saveButton")
var resultsDiv_JQ = $("#results")
var errorMessage_JQ = $("#errorMessage")

function saveButtonClicked(event)
{
    const addSchedule = limit_JQ.val();
    const query = addSchedule_JQ.val();

    if(!query || !(parseInt(addSchedule)))
    {
        errorMessage_JQ.text("You did not enter the neccesary information!");
        return;
    }

    const addSchedule = addSchedule_JQ.val();
    const save = save_JQ.val();


    const queryURL = 
    let requestPromise = $.ajax({
        url: queryURL,
        method: "GET",
        success: function(response) 
        {

        }
      });
}

//Event assignment
searchButton_JQ.on("click",saveButtonClicked);

