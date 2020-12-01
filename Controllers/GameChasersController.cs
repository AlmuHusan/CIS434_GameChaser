using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
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

        [HttpPost("[action]")]
        public void postTableData([FromBody] JsonElement dataPackage)
        {
            GameSession session= new GameSession();
            session.Game = dataPackage.GetProperty("Game").ToString();
            session.Name = dataPackage.GetProperty("Name").ToString();
            session.size = Int32.Parse(dataPackage.GetProperty("Size").ToString());
            session.Time = Convert.ToDateTime( dataPackage.GetProperty("Time").ToString());
            session.Summary = dataPackage.GetProperty("Summary").ToString();
            session.Region = dataPackage.GetProperty("Region").ToString();
            session.GameSessionId = db.GameSessions.Count<GameSession>()+1;
            db.GameSessions.Add(session);
            db.SaveChanges();
        }
    }
}
