namespace WebApi.Manager
{
    public class FileManager : IFileManager
    {
        public async Task<string> ReadFile(string path)
        {
            string text = await File.ReadAllTextAsync(path);
            return text;
        }
    }
}
