using Microsoft.EntityFrameworkCore;

namespace baddies.Data
{
    public class MovieDbContext : DbContext
    {
        public MovieDbContext(DbContextOptions<MovieDbContext> options) : base(options) { }
        public DbSet<JoelMovie> Movies { get; set; }
    }
}
