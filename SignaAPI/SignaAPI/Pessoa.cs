using System.ComponentModel.DataAnnotations;

namespace SignaAPI
{
    public class Pessoa
    {
        public int PessoaId { get; set; }
        [StringLength(255, MinimumLength = 3)]
        public string NomeFantasia { get; set; } = string.Empty;
        [StringLength(20, MinimumLength = 11)]
        public string CnpjCpf { get; set; } = string.Empty;
    }
}
