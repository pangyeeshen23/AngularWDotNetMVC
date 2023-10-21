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
        public DbSet<Job> Jobs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>()
                .HasOne(e => e.Job)
                .WithOne(e => e.Employee)
                .HasForeignKey<Job>(e => e.EmpId)
                .IsRequired();
        }
    }
}
