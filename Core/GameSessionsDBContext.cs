using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace react_asp_template.Core
{
    public class GameSessionsDBContext : DbContext
    {
        public GameSessionsDBContext(DbContextOptions<GameSessionsDBContext> options) : base(options) { }
        public DbSet<GameSession> GameSessions { get; set; }
        public DbSet<Login> Logins { get; set; }
    }
}
