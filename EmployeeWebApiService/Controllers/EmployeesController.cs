using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmployeeWebApiService.Controllers
{
    public class EmployeesController : ApiController
    {
        private readonly EmployeesDbEntities entities = new EmployeesDbEntities();
        public IEnumerable<Employee> Get()
        {
            //            using (EmployeesDbEntities entities = new EmployeesDbEntities())
            //            {
            //                return entities.Employees.ToList();
            //            }
            return entities.Employees.ToList();

        }

        public Employee Get(string code)
        {
            return entities.Employees.FirstOrDefault(e => e.code == code);
        }
    }
}
