using Microsoft.EntityFrameworkCore;
using WebApi.DbContexts;
using WebApi.Models;

namespace WebApi.Repositorys
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly WebApiDbContext _context;

        public EmployeeRepository(WebApiDbContext context)
        {
            _context = context;
        }

        public async Task<List<Employee>> GetEmployeeList()
        {
            List<Employee> employeeList = await _context.Employees.Include(e => e.Job).ToListAsync();
            return employeeList;
        }

    }
}
