﻿using System.ComponentModel.DataAnnotations;

namespace baddies.Data
{
    public class JoelMovie
    {//Setting up the database :)
        [Key]
        public int MovieId { get; set; }
        public string? Category { get; set; }
        public string? Title { get; set; }
        public int Year { get; set; }
        public string? Director { get; set; }
        public string? Rating { get; set; }
        public string? Edited { get; set; }
        public string? LentTo { get; set; }

    }
}
