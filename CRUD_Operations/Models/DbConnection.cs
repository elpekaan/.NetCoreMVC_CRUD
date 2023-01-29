using Microsoft.EntityFrameworkCore;

namespace CRUD_Operations.Models
{
    public class DbConnection : DbContext
    {
        public DbConnection(DbContextOptions<DbConnection> options) : base(options)
        {

        }
        public DbSet<Student> Student { get; set; }
    }
}
