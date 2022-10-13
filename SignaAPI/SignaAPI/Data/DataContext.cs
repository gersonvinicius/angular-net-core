using Microsoft.EntityFrameworkCore;

namespace SignaAPI.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {

    }

    public DbSet<Pessoa> Pessoas => Set<Pessoa>();

}
