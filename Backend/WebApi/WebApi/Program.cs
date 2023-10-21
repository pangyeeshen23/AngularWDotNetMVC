using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection.Extensions;
using WebApi.DbContexts;
using WebApi.Manager;
using WebApi.Models;
using WebApi.Repositorys;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IEmployeeRepository, EmployeeRepository>();
builder.Services.AddScoped<IFileManager, FileManager>();
builder.Services.AddDbContext<WebApiDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("BaseConnection")));
builder.Services.AddCors(p => p.AddPolicy("corsapp", builder => {
    builder.WithOrigins("http://localhost:4200/", "http://localhost:4200").AllowAnyHeader().AllowAnyMethod();
}));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("corsapp");
app.UseAuthorization();

app.MapControllers();

app.Run();
