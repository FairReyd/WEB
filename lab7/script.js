$(document).ready(function () {
    $("#addTask").click(function () {
        let taskText = $("#taskInput").val().trim();
        if (taskText !== "") {
            $("#taskList").append(`<li class='list-group-item d-flex justify-content-between align-items-center'>${taskText} <button class='btn btn-danger btn-sm removeTask'>Видалити</button></li>`);
            $("#taskInput").val("");
        }
    });
    
    $("#taskList").on("click", ".removeTask", function () {
        $(this).parent().remove();
    });
});