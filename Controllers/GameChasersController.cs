using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using react_asp_template.Core;

namespace react_asp_template.Controllers
{
    [Route("[controller]")]
    public class GameChasersController : Controller
    {
        GameSessionsDBContext db;
        public GameChasersController(GameSessionsDBContext db)
        {
            this.db = db;

        }


        [HttpGet("[action]")]
        public List<GameSession> getTableData()
        {
            var data = new List<GameSession>();
            foreach(var line in db.GameSessions)
            {
                data.Add(line);
            }
            return data;
        }

        [HttpGet("[action]")]
        public List<Login> getLoginData()
        {
            var data2 = new List<Login>();
            foreach (var line in db.Logins)
            {
                data2.Add(line);
            }
            return data2;
        }
    }
}
