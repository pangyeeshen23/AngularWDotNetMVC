namespace WebApi.Dtos
{
    public class FileContentDto
    {
        public string? Content { get; set; }

        public List<string> ContentList 
        { 
            get 
            {
                return (!string.IsNullOrEmpty(this.Content)) ? this.Content.Split(',').ToList() : new List<string>() ;
            }
        }
    }
}
