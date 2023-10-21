namespace WebApi.Manager
{
    public interface IFileManager
    {
        Task<string> ReadFile(string path);
    }
}
