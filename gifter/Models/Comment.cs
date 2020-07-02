using System;
using System.ComponentModel.DataAnnotations;

namespace Gifter.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string Message { get; set; }

        [Required]
        public int UserProfileId { get; set; }

        public UserProfile UserProfile { get; set; }
        [Required]
        public int PostId { get; set; }

        public Post Post { get; set; }
    }
}