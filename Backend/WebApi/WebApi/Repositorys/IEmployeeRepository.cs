using Microsoft.EntityFrameworkCore;
using WebApi.DbContexts;
using WebApi.Models;

namespace WebApi.Repositorys
{
    public interface IEmployeeRepository
    {
        Task<List<Employee>> GetEmployeeList();

    }
}
