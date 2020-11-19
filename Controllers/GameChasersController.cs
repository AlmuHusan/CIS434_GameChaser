using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using react_asp_template.Core;

namespace react_asp_template.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GameChasersController : ControllerBase
    {
        GameSessionsDBContext db;
        public GameChasersController(GameSessionsDBContext db)
        {
            this.db = db;

        }


        [HttpGet]
        public List<GameSession> Get()
        {
            var data = new List<GameSession>();
            foreach(var line in db.GameSessions)
            {
                data.Add(line);
            }
            return data;
        }
    }
}
