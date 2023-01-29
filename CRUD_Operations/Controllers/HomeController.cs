using CRUD_Operations.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Xml;

namespace CRUD_Operations.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly DbConnection _connection;

        public HomeController(ILogger<HomeController> logger, DbConnection connection)
        {
            _logger = logger;
            _connection = connection;
        }

        public IActionResult Index()
        {
            var studentList = _connection.Student.ToList();
            return View(studentList);
        }

        [HttpPost]
        public IActionResult InsertStudent(Student student)
        {
            _connection.Student.Add(student);
            _connection.SaveChanges();
            return Ok("Basariyla Eklendi");
        }
        [HttpPost]
        public IActionResult UpdateStudent(Student student)
        {
            _connection.Student.Update(student);
            _connection.SaveChanges();
            return Ok("Basariyla Guncellendi");
        }
        [HttpGet]
        public IActionResult GetStudent(int id)
        {
            var student = _connection.Student.FirstOrDefault(x => x.Id == id);
            return Ok(student);
        }
        [HttpGet]
        public IActionResult DeleteStudent(int id)
        {
            var entity = _connection.Student.Find(id);
            _connection.Student.Remove(entity!);
            _connection.SaveChanges();
            return Ok("Basariyla silindi");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}