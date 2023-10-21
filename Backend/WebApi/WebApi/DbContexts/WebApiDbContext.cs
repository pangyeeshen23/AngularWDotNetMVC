using Microsoft.EntityFrameworkCore;
using WebApi.Models;

namespace WebApi.DbContexts
{
    public class WebApiDbContext : DbContext
    {
        public WebApiDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<Departments> Departments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>()
                .HasOne(e => e.Department)
                .WithOne(e => e.Employee)
                .HasForeignKey<Departments>(e => e.EmpId)
                .IsRequired();
        }
    }
}
