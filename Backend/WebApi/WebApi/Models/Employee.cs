using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.Models
{
    public class Employee
    {
        [Key]
        public long Id { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string? Name { get; set; }

        [Column(TypeName = "nvarchar(3)")]
        public int Age { get; set; }

        public Departments? Department { get; set;}

    }
}
