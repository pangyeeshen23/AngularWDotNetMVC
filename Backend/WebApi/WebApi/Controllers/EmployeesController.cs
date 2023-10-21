using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using WebApi.DbContexts;
using WebApi.Dto;
using WebApi.Models;
using WebApi.Repositorys;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : ControllerBase
    {
        protected readonly IEmployeeRepository employeeRepo;
        public EmployeesController(IEmployeeRepository employeeRepo)
        {
            this.employeeRepo = employeeRepo;
        }

        // GET: Employees List
        [HttpGet("GetEmployeeList")]
        public async Task<List<EmployeeListDto>> GetEmployeeList()
        {
            var empList = await this.employeeRepo.GetEmployeeList();
            var maxAge = empList.Max(e => e.Age);
            var minAge = empList.Min(e => e.Age);
            List<EmployeeListDto> result = empList.Where(e => e.Age == minAge || e.Age == maxAge).Select( e => new EmployeeListDto
            {
                EmpID = e.Id,
                EmployeeName = e.Name,
                Designation = e.Job?.Designation,
                Age = e.Age
            }).ToList();

            return result;
        }
    }
}
