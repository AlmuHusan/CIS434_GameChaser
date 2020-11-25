using System;
using System.Text.Json.Serialization;

namespace react_asp_template
{
    
    public class GameSession
    {
        [JsonPropertyName("gameSessionId")]
        public int GameSessionId { get; set; }

        [JsonPropertyName("game")]
        public string Game { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("size")]
        public int size { get; set; }

        [JsonPropertyName("region")]
        public string Region { get; set; }

        [JsonPropertyName("time")]
        public DateTime Time { get; set; }

        [JsonPropertyName("summary")]
        public string Summary { get; set; }

    }
}
