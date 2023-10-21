using Microsoft.AspNetCore.Mvc;
using WebApi.Dtos;
using WebApi.Manager;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class FileController : ControllerBase
    {
        private readonly IFileManager fileManager;
        public FileController(IFileManager fileManager)
        {
            this.fileManager = fileManager;
        }

        [HttpGet("GetFileContent")]
        public async Task<FileContentDto> GetFileContent()
        {
            FileContentDto fileContentDto = new FileContentDto();
            string lines = await this.fileManager.ReadFile("UploadFiles/Fruits and Veggies.txt");
            fileContentDto.Content = lines;
            return fileContentDto;
        }
    }
}
