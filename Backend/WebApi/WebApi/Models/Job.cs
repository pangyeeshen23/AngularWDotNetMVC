using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.Models
{
    public class Job
    {
        [Key]
        public long Id { get; set; }

        public long EmpId { get; set; }
        public Employee Employee { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string? Designation { get; set; }


    }
}
