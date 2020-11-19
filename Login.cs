using System;
using System.Text.Json.Serialization;

namespace react_asp_template
{

    public class Login
    {
        [JsonPropertyName("loginId")]
        public int LoginId { get; set; }

        [JsonPropertyName("username")]
        public string Username { get; set; }

        [JsonPropertyName("password")]
        public string Password { get; set; }


    }
}
