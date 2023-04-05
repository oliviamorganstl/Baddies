using baddies.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace baddies.Controllers
{ //This file is in charge of filtering so that only the edited movies display
    [ApiController]
    [Route("[controller]")]
    public class MovieController: Controller
    {
        private MovieDbContext context;
        public MovieController(MovieDbContext temp)
        {
            context = temp;
        }
        public IEnumerable<JoelMovie> Get()
        {
            var x = context.Movies
                .Where(m => m.Edited == "Yes")
                .OrderBy(m => m.Title)
                .ToArray();
            return x;
        }
    }
}
