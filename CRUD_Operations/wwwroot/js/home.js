$("#saveStudent").click(function () {

    let name = $("#Name").val();
    let surName = $("#Surname").val();
    let age = $("#Age").val();
    let student = {
        Name: name,
        Surname: surName,
        Age: age
    }
    $.ajax({
        type: "POST",
        url: "https://localhost:7198/Home/InsertStudent",
        data: student,
        success: function (response) {
            alert(response);
            location.reload();
        },
        error: function (error) {
            alert("Bir hata olustu");
            console.log(error)
        }
    });
});

$("#saveUpdatedStudent").click(function () {

    let name = $("#updateName").val();
    let surName = $("#updateSurname").val();
    let age = $("#updateAge").val();
    let id = $("#updateId").val();

    let student = {
        Id: id,
        Name: name,
        Surname: surName,
        Age: age
    }
    $.ajax({
        type: "POST",
        url: "https://localhost:7198/Home/UpdateStudent",
        data: student,
        success: function (response) {
            alert(response);
            location.reload();
        },
        error: function (error) {
            alert("Bir hata olustu");
            console.log(error)
        }
    });
});

function fillStudent(id) {
    $.ajax({
        type: "GET",
        url: "https://localhost:7198/Home/GetStudent?id=" + id,
        success: function (response) {
            console.log(response)
            $("#updateId").val(response.id);
            $("#updateName").val(response.name);
            $("#updateSurname").val(response.surname);
            $("#updateAge").val(response.age);
            $('#updateStudentModal').modal("show");
        },
        error: function (error) {
            alert("Bir hata olustu");
        }
    });
}
function deleteStudent(id) {
    $.ajax({
        type: "GET",
        url: "https://localhost:7198/Home/DeleteStudent?id=" + id,
        success: function (response) {
            alert("Basariyla silindi");
            location.reload();
        },
        error: function (error) {
            alert("Bir hata olustu");
            console.log(error)
        }
    });
}
$("#newStudent").click(function () {
    $('#studentModal').modal("show");
});
